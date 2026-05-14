/**
 * Generated Tool: workspacesTool_0573
 * Domain: Workspaces
 * ID: 0573
 */
exports.workspacesTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0573:', error);
    throw error;
  }
};
