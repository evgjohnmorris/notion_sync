/**
 * Generated Tool: workspacesTool_0739
 * Domain: Workspaces
 * ID: 0739
 */
exports.workspacesTool_0739 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0739:', error);
    throw error;
  }
};
