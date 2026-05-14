/**
 * Generated Tool: workspacesTool_0994
 * Domain: Workspaces
 * ID: 0994
 */
exports.workspacesTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0994:', error);
    throw error;
  }
};
