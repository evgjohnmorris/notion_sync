/**
 * Generated Tool: workspacesTool_0050
 * Domain: Workspaces
 * ID: 0050
 */
exports.workspacesTool_0050 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0050:', error);
    throw error;
  }
};
