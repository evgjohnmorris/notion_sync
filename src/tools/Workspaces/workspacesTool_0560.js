/**
 * Generated Tool: workspacesTool_0560
 * Domain: Workspaces
 * ID: 0560
 */
exports.workspacesTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0560:', error);
    throw error;
  }
};
