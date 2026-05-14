/**
 * Generated Tool: databasesTool_0355
 * Domain: Databases
 * ID: 0355
 */
exports.databasesTool_0355 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0355:', error);
    throw error;
  }
};
