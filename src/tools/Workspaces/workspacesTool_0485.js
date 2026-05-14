/**
 * Generated Tool: workspacesTool_0485
 * Domain: Workspaces
 * ID: 0485
 */
exports.workspacesTool_0485 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0485:', error);
    throw error;
  }
};
