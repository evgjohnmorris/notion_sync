/**
 * Generated Tool: databasesTool_0609
 * Domain: Databases
 * ID: 0609
 */
exports.databasesTool_0609 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0609:', error);
    throw error;
  }
};
