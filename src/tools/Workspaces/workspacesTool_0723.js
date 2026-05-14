/**
 * Generated Tool: workspacesTool_0723
 * Domain: Workspaces
 * ID: 0723
 */
exports.workspacesTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0723:', error);
    throw error;
  }
};
