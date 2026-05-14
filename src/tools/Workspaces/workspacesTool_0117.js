/**
 * Generated Tool: workspacesTool_0117
 * Domain: Workspaces
 * ID: 0117
 */
exports.workspacesTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0117:', error);
    throw error;
  }
};
