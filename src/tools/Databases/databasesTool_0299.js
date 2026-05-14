/**
 * Generated Tool: databasesTool_0299
 * Domain: Databases
 * ID: 0299
 */
exports.databasesTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0299:', error);
    throw error;
  }
};
