/**
 * Generated Tool: workspacesTool_0386
 * Domain: Workspaces
 * ID: 0386
 */
exports.workspacesTool_0386 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0386:', error);
    throw error;
  }
};
