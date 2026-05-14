/**
 * Generated Tool: workspacesTool_0920
 * Domain: Workspaces
 * ID: 0920
 */
exports.workspacesTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0920:', error);
    throw error;
  }
};
