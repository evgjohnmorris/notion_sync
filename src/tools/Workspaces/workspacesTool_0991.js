/**
 * Generated Tool: workspacesTool_0991
 * Domain: Workspaces
 * ID: 0991
 */
exports.workspacesTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0991:', error);
    throw error;
  }
};
