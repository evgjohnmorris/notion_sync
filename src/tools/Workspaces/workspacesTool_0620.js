/**
 * Generated Tool: workspacesTool_0620
 * Domain: Workspaces
 * ID: 0620
 */
exports.workspacesTool_0620 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0620:', error);
    throw error;
  }
};
