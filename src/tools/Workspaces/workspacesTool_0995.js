/**
 * Generated Tool: workspacesTool_0995
 * Domain: Workspaces
 * ID: 0995
 */
exports.workspacesTool_0995 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0995:', error);
    throw error;
  }
};
