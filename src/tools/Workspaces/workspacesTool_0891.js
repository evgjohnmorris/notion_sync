/**
 * Generated Tool: workspacesTool_0891
 * Domain: Workspaces
 * ID: 0891
 */
exports.workspacesTool_0891 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0891:', error);
    throw error;
  }
};
