/**
 * Generated Tool: workspacesTool_0938
 * Domain: Workspaces
 * ID: 0938
 */
exports.workspacesTool_0938 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0938:', error);
    throw error;
  }
};
