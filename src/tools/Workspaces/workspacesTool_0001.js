/**
 * Generated Tool: workspacesTool_0001
 * Domain: Workspaces
 * ID: 0001
 */
exports.workspacesTool_0001 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0001:', error);
    throw error;
  }
};
