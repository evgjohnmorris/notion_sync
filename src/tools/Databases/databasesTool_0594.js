/**
 * Generated Tool: databasesTool_0594
 * Domain: Databases
 * ID: 0594
 */
exports.databasesTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0594:', error);
    throw error;
  }
};
