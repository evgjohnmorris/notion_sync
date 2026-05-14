/**
 * Generated Tool: workspacesTool_0143
 * Domain: Workspaces
 * ID: 0143
 */
exports.workspacesTool_0143 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0143:', error);
    throw error;
  }
};
