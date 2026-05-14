/**
 * Generated Tool: workspacesTool_0398
 * Domain: Workspaces
 * ID: 0398
 */
exports.workspacesTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0398:', error);
    throw error;
  }
};
