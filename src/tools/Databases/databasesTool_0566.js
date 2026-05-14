/**
 * Generated Tool: databasesTool_0566
 * Domain: Databases
 * ID: 0566
 */
exports.databasesTool_0566 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0566:', error);
    throw error;
  }
};
