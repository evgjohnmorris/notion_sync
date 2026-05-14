/**
 * Generated Tool: workspacesTool_0747
 * Domain: Workspaces
 * ID: 0747
 */
exports.workspacesTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0747:', error);
    throw error;
  }
};
