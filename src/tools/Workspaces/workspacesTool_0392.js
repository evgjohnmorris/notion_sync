/**
 * Generated Tool: workspacesTool_0392
 * Domain: Workspaces
 * ID: 0392
 */
exports.workspacesTool_0392 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0392:', error);
    throw error;
  }
};
