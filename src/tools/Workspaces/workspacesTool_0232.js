/**
 * Generated Tool: workspacesTool_0232
 * Domain: Workspaces
 * ID: 0232
 */
exports.workspacesTool_0232 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0232:', error);
    throw error;
  }
};
