/**
 * Generated Tool: workspacesTool_0956
 * Domain: Workspaces
 * ID: 0956
 */
exports.workspacesTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0956:', error);
    throw error;
  }
};
