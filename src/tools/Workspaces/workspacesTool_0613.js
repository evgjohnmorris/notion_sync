/**
 * Generated Tool: workspacesTool_0613
 * Domain: Workspaces
 * ID: 0613
 */
exports.workspacesTool_0613 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0613:', error);
    throw error;
  }
};
