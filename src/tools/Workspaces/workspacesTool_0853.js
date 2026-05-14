/**
 * Generated Tool: workspacesTool_0853
 * Domain: Workspaces
 * ID: 0853
 */
exports.workspacesTool_0853 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0853:', error);
    throw error;
  }
};
