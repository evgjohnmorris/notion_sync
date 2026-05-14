/**
 * Generated Tool: workspacesTool_0873
 * Domain: Workspaces
 * ID: 0873
 */
exports.workspacesTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0873:', error);
    throw error;
  }
};
