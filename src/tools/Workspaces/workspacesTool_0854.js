/**
 * Generated Tool: workspacesTool_0854
 * Domain: Workspaces
 * ID: 0854
 */
exports.workspacesTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0854:', error);
    throw error;
  }
};
