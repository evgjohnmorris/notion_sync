/**
 * Generated Tool: workspacesTool_0693
 * Domain: Workspaces
 * ID: 0693
 */
exports.workspacesTool_0693 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0693:', error);
    throw error;
  }
};
