/**
 * Generated Tool: workspacesTool_0525
 * Domain: Workspaces
 * ID: 0525
 */
exports.workspacesTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0525:', error);
    throw error;
  }
};
