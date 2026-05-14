/**
 * Generated Tool: workspacesTool_0844
 * Domain: Workspaces
 * ID: 0844
 */
exports.workspacesTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0844:', error);
    throw error;
  }
};
