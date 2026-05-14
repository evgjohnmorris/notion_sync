/**
 * Generated Tool: workspacesTool_0442
 * Domain: Workspaces
 * ID: 0442
 */
exports.workspacesTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0442:', error);
    throw error;
  }
};
