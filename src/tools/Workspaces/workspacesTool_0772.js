/**
 * Generated Tool: workspacesTool_0772
 * Domain: Workspaces
 * ID: 0772
 */
exports.workspacesTool_0772 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0772:', error);
    throw error;
  }
};
