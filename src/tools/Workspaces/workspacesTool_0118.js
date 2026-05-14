/**
 * Generated Tool: workspacesTool_0118
 * Domain: Workspaces
 * ID: 0118
 */
exports.workspacesTool_0118 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0118:', error);
    throw error;
  }
};
