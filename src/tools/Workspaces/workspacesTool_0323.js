/**
 * Generated Tool: workspacesTool_0323
 * Domain: Workspaces
 * ID: 0323
 */
exports.workspacesTool_0323 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0323:', error);
    throw error;
  }
};
