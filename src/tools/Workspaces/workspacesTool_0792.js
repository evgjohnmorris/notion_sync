/**
 * Generated Tool: workspacesTool_0792
 * Domain: Workspaces
 * ID: 0792
 */
exports.workspacesTool_0792 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0792:', error);
    throw error;
  }
};
