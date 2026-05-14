/**
 * Generated Tool: workspacesTool_0494
 * Domain: Workspaces
 * ID: 0494
 */
exports.workspacesTool_0494 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0494:', error);
    throw error;
  }
};
