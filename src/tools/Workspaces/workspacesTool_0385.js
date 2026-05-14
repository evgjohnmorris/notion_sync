/**
 * Generated Tool: workspacesTool_0385
 * Domain: Workspaces
 * ID: 0385
 */
exports.workspacesTool_0385 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0385:', error);
    throw error;
  }
};
