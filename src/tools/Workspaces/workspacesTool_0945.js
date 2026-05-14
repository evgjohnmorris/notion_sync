/**
 * Generated Tool: workspacesTool_0945
 * Domain: Workspaces
 * ID: 0945
 */
exports.workspacesTool_0945 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0945:', error);
    throw error;
  }
};
