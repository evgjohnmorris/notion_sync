/**
 * Generated Tool: workspacesTool_0181
 * Domain: Workspaces
 * ID: 0181
 */
exports.workspacesTool_0181 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0181:', error);
    throw error;
  }
};
