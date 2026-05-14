/**
 * Generated Tool: workspacesTool_0933
 * Domain: Workspaces
 * ID: 0933
 */
exports.workspacesTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0933:', error);
    throw error;
  }
};
