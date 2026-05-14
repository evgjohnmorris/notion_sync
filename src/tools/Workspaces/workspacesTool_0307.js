/**
 * Generated Tool: workspacesTool_0307
 * Domain: Workspaces
 * ID: 0307
 */
exports.workspacesTool_0307 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0307:', error);
    throw error;
  }
};
