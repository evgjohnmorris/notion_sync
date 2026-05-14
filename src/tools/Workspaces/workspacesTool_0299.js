/**
 * Generated Tool: workspacesTool_0299
 * Domain: Workspaces
 * ID: 0299
 */
exports.workspacesTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0299:', error);
    throw error;
  }
};
