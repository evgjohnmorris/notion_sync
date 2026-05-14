/**
 * Generated Tool: workspacesTool_0879
 * Domain: Workspaces
 * ID: 0879
 */
exports.workspacesTool_0879 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0879:', error);
    throw error;
  }
};
