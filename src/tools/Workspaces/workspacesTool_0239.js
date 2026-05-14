/**
 * Generated Tool: workspacesTool_0239
 * Domain: Workspaces
 * ID: 0239
 */
exports.workspacesTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0239:', error);
    throw error;
  }
};
