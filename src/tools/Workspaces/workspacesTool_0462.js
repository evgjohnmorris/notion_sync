/**
 * Generated Tool: workspacesTool_0462
 * Domain: Workspaces
 * ID: 0462
 */
exports.workspacesTool_0462 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0462:', error);
    throw error;
  }
};
