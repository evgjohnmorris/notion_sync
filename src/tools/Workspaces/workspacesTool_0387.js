/**
 * Generated Tool: workspacesTool_0387
 * Domain: Workspaces
 * ID: 0387
 */
exports.workspacesTool_0387 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0387:', error);
    throw error;
  }
};
