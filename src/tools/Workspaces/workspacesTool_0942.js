/**
 * Generated Tool: workspacesTool_0942
 * Domain: Workspaces
 * ID: 0942
 */
exports.workspacesTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0942:', error);
    throw error;
  }
};
