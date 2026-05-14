/**
 * Generated Tool: workspacesTool_0237
 * Domain: Workspaces
 * ID: 0237
 */
exports.workspacesTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0237:', error);
    throw error;
  }
};
