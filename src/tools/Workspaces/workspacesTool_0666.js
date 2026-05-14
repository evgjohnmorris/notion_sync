/**
 * Generated Tool: workspacesTool_0666
 * Domain: Workspaces
 * ID: 0666
 */
exports.workspacesTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0666:', error);
    throw error;
  }
};
