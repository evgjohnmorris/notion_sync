/**
 * Generated Tool: workspacesTool_0082
 * Domain: Workspaces
 * ID: 0082
 */
exports.workspacesTool_0082 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0082:', error);
    throw error;
  }
};
